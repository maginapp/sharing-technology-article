import {produce} from "immer"

const baseState = [
    {
        title: "Learn TypeScript",
        done: true
    },
    {
        title: "Try Immer",
        done: false
    }
]

const nextState = produce(baseState, draftState => {
    draftState.push({title: "Tweet about it"})
    draftState[1].done = true
})

const nextState2 = produce(baseState, draftState => {
    draftState.push({title: "Tweet about it"})
    draftState[1].done = true
})

export const immerTest = () => {
    console.log(baseState.length)
    console.log(baseState[1].done)
    console.log(nextState.length)
    console.log(nextState[1].done)
    console.log(nextState2.length)
    console.log(nextState2[1].done)
}