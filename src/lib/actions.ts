"use server";

const sleep = (ms: number):Promise<string> => new Promise(resolve => setTimeout(() => { resolve("sleeped") }, ms));

export async function action(state: Readonly<number>, formData: Readonly<FormData>) {
    console.log("Server Actions", state, formData.get("input1"));

    // Server Actions 内部での Await は問題ない
    console.log(await sleep(1000));

    return state + 1;
}