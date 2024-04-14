import { atom } from "solid-jotai";

export const todosAtom = atom<
  { id: number; title: string; description: string }[]
>([]);
