import React from 'react';

const module = import('../utils');
function PackageTwo() {
  React.useEffect(() => {
    console.log('module..', module)
  }, [])
  return (
    <section>
      <h1>Package Two</h1>
    </section>
  )
}

export default PackageTwo