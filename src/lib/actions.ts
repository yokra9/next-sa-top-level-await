"use server";

const sleep = (ms: number):Promise<string> => new Promise(resolve => setTimeout(() => { resolve("sleeped") }, ms));

// IIFE パターン
let data: string | null = null;
(async () => data = await sleep(1000))();

export async function action(state: Readonly<number>, formData: Readonly<FormData>) {
    console.log("Server Actions", state, formData.get("input1"));

    // null の可能性あり
    console.log(data);

    return state + 1;
}