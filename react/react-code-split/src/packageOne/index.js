import React from 'react';

let moduleLoaded;

function setModule(mod) {
  moduleLoaded = mod;
}

function PackageOne() {
  const [value, setValue] = React.useState(0)
  React.useEffect(() => {
    async function loadModule(){
      const module = await import('../utils');
      setModule(module)
      setValue(module.add(10, 30));
    }
    loadModule();
  })
  return (
    <section>
      <h1>Package one</h1>
      <div>{value}</div>
    </section>
  )
}

export default PackageOne