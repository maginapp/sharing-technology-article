function divisorSubstrings(num: number, k: number): number {
    let i = 0;
    let count = 0;
    let str = num + '';
    while (i + k  <= str.length) {
        let goal = +str.slice(i, i + k);
        if (goal && (num % goal === 0)) {
            count++
        }
    }
    return count
};



function minEatingSpeed1(piles: number[], h: number): number {
    piles.sort();
    const len = piles.length;
    function isInValid(mid: number): boolean {
        let count = 0;
        for (let i = 0; i < len; i++) {
            const time = Math.ceil(piles[i] / mid)
            if (count + time * (len - i) > h) {
                return true;
            } else {
                count += time;
            }
        }
        return false;
    }
    

    const diff = h - len;
    if (diff === 0) {
        return piles[len - 1];
    }
    let min = piles[0];
    let max = piles[len - 1];
    while(min < max) {
        let mid = Math.floor((min + max) / 2);
        console.log(mid)
        if (isInValid(mid)) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return min
};



function minEatingSpeed(piles: number[], h: number): number {
    const len = piles.length;

  
    let min = 0; // 恒为 false
    let max = Math.max(...piles); // 恒为 true

    if (h === len) {
        return max;
    }
    

    function isInValid(mid: number): boolean {
        let count = 0;
        for (let i = 0; i < len; i++) {
            count +=  Math.ceil(piles[i] / mid);
            if (count > h) {
                return true
            }
        }
        return count > h;
    }
    

    while(min < max) {
        let mid = Math.floor((min + max) / 2);
        
        if (isInValid(mid)) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return min
};


function nearestExit(maze: string[][], entrance: number[]): number {
    const m = maze.length;
        const n = maze[0].length;
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
        // BFS 算法的队列和 visited 数组
        const queue = [];
        const visited = Array.from({ length: m }, () => Array(n).fill(false));
        queue.push(entrance);
        visited[entrance[0]][entrance[1]] = true;
        // 启动 BFS 算法从 entrance 开始像四周扩散
        let step = 0;
        while (queue.length) {
            const sz = queue.length;
            step++;
            // 扩散当前队列中的所有节点
            for (let i = 0; i < sz; i++) {
                const cur = queue.shift();
                // 每个节点都会尝试向上下左右四个方向扩展一步
                for (const dir of dirs) {
                    const x = cur[0] + dir[0];
                    const y = cur[1] + dir[1];
                    if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || maze[x][y] === '+') {
                        continue;
                    }
                    if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
                        // 走到边界（出口）
                        return step;
                    }
                    visited[x][y] = true;
                    queue.push([x, y]);
                }
            }
        }
        return -1;
    };


    function nearestExit(maze: string[][], entrance: number[]): number {
        const m = maze.length;
        const n = maze[0].length;
        const dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        let queue = [entrance];
        let step = 0;
        maze[entrance[0]][entrance[1]] = '?'
        while (queue.length) {
            step++;
            const newQueue = [];
            console.log(queue)
            for (let i = 0; i < queue.length; i++) {
                let pos = queue[i];
                for (let [x, y] of dirs) {
                    const [nx, ny] = [pos[0] + x, pos[1] + y];
            // console.log({nx, ny})
                    if (nx < 0 || nx >= m || ny < 0 || ny >= n || maze[nx][ny] !== '.') {
                        continue;
                    }
            // console.log({nx, ny})
                    // if (maze[nx][ny] === ',') {
                        if (nx === 0 || ny ===0 || nx === m - 1 || ny === n-1) {
                            return step;
                        }
                        newQueue.push([nx, ny]);
                        maze[nx][ny] = '?'
                    // }
                }
            }
            queue = newQueue;
            
        }
    
        return -1;
    };