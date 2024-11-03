"use server";

const sleep = (ms: number):Promise<string> => new Promise(resolve => setTimeout(() => { resolve("sleeped") }, ms));

// Top-level Await
const data = await sleep(1000);

export async function action(state: Readonly<number>, formData: Readonly<FormData>) {
    console.log("Server Actions", state, formData.get("input1"));

    console.log(data);

    return state + 1;
}