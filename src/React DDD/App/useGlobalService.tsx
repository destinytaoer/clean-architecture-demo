function useGlobalService() {
  return { state: '' };
}
const GlobalService = createContext(null);

function SomeComponent() {
  return <GlobalService.Provider value={useGlobalService()}></GlobalService.Provider>;
}

// 使用
// <SimpleService.Provider value={useSimpleService()}>
//   { props.children }
// </SimpleService.Provider >

// function SomeComponent() {
//   const globalService = useContext(GlobalService);
//   return <div>{globalService.state}</div>;
// }
