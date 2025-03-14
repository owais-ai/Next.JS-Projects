"use client";
import { countStore } from "./store";

export default function Home() {
  const count = countStore((state: any) => state.count);
  const increment = countStore((state: any) => state.increment);
  const decrement = countStore((state: any) => state.decrement);
  const reset = countStore((state: any) => state.reset);
  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <br />
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button> <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
