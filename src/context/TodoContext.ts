import { createContext } from "react";

const TodoContext = createContext<[any, any]>([[], (e:any)=>null]);

export { TodoContext }
