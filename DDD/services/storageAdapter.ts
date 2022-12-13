import {OrderStorageService} from "../application/ports";
import {useStore} from "./store";

export function useOrdersStorage(): OrderStorageService {
    return useStore();
}
