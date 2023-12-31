{
    // STATIC --------------------------->>>>

    class StaticCount {
        static count: number = 0;

        increment() {
            return (StaticCount.count = StaticCount.count + 1);
        }
        static decrement() {
            return (StaticCount.count = StaticCount.count - 1);
        }
    }

    const instanceCount1 = new StaticCount();
    console.log(instanceCount1.increment());

    console.log(StaticCount.decrement());
    console.log(StaticCount.decrement());
    console.log(StaticCount.decrement());





















}