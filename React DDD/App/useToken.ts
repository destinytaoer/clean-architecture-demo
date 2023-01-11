import { createContext } from 'react';

/**
 * 泛型约束获取注入令牌
 *
 * @export
 * @template T
 * @param {(...args: any[]) => T} func
 * @param {(T | undefined)} [initialValue=undefined]
 * @returns
 */
export default function useToken<T>(
  func: (...args: any[]) => T,
  initialValue: T | undefined = undefined
) {
  return createContext(initialValue as T);
}

import { useState } from 'react';
import useToken from './useToken';

export const AppService = useToken(useAppService);

export default function useAppService() {
  // 可注入其他服务，以嵌套
  // eq:
  // const someOtherService = useSomeOtherService(SomeOtherService)
  const [appName, setAppName] = useState('appName');
  return {
    appName,
    setAppName,
    // ...
  };
}
