


class PlateStacks{
    constructor(capacity) {
        this.capacity = capacity;
        var stacks = [];
    }
    push(value){
        const lastStack = this.stacks[this.stacks.length - 1];


        if(!lastStack || lastStack.size() !== this.capacity){
            const newStack = new Stack();
            newStack.push(value);
            this.stacks.push(newStack);
        }else{
            lastStack.push(value);
        }


    }

    pop(){
        const lastStack = this.stacks[this.stacks.length - 1];

        if(!lastStack){
            return undefined;
        }

        if (lastStack.size() === 0){
            this.stacks.pop();
        }

        return lastStack.pop();
    }


}