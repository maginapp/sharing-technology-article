const fn  = (a: string) => {
    console.log('hi ' +a)
}

// unit arr

const createUnion =() => {

    const tasks: ((props: any, next: any) => void)[] = [];
 
    return {
        use: (task: (props: any, next: any) => void) => {
            tasks.push(task);
        },
        trigger: (props) => {
            const doNext = (i) => {
                return () => {
                    if (i === tasks.length) {
                        console.log('end')
                        return () => {}
                    }
                    tasks[i](props, doNext(i+1));
                }
            }
            doNext(0)();
        }
    }
}

const createTask = (num: number) => {
    return (props, next) => {
        console.log('current trigger start -> ', num);
        next();
        console.log('current trigger end -> ', num);
    }
}

export const test = () =>{
    const union = createUnion();



    union.use(createTask(1));
    union.use(createTask(2));
    union.use(createTask(3));

    

    union.trigger('a');
}

 
