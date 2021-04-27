# how to EventSource with Redux Observable
```javascript
/*-----------------------------------------*/
import { fromEvent } from 'rxjs/observable/fromEvent';

const fromEventSource = url => {
  return new Observable(observer => {
    const source = new EventSource(url);
    const message$ = fromEvent(source, 'message');
    const subscription = message$.subscribe(observer);

    return () => {
      subscription.unsubscribe();
      source.close();
    };
  });
};
/*-----------------------------------------*/
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

const fromEventSource = (url, openObserver) => {
  return new Observable(observer => {
    const open = new Subscriber(openObserver);
    const source = new EventSource(url);

    const onOpen = event => {
      open.next(event);
      open.complete();
    };

    const onError = event => {
      if (event.readyState === EventSource.CLOSED) {
        observer.complete();
      } else {
        observer.error(event);
      }
    };

    const onMessage = event => {
      observer.next(event.data);
    };

    source.addEventListener('open', onOpen, false);
    source.addEventListener('error', onError, false);
    source.addEventListener('message', onMessage, false);

    return () => {
      source.removeEventListener('open', onOpen, false);
      source.removeEventListener('error', onError, false);
      source.removeEventListener('message', onMessage, false);
      source.close();
    };
  });
};

fromEventSource('http://some-url.com')
  .subscribe(value => console.log(value));

/*-----------------------------------------*/
const somethingEpic = action$ =>
  action$.ofType(SOMETHING)
    .mergeMap(() =>
      fromEventSource('http://some-url.com')
        .map(message => ({
          type: MESSAGE,
          payload: message
        }))
        .catch(e => Observable.of({
          type: SOMETHING_ERROR,
          payload: e,
          error: true
        }))
    );
```