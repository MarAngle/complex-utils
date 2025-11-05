class Wait {
    constructor(initOption) {
        if (initOption.notice) {
            this.notice = {
                show: false,
                message: initOption.notice.message,
                timer: setTimeout(() => {
                    if (this.notice && this.notice.show) {
                        // 未被销毁且函数被触发，此时进行提示
                        console.warn(this.notice.message);
                    }
                }, initOption.notice.offset)
            };
        }
        if (initOption.timeout) {
            this.timeout = {
                message: initOption.timeout.message,
                timer: setTimeout(() => {
                    if (this.timeout) {
                        // 未被销毁，此时进行提示并销毁
                        console.error(this.timeout.message);
                        this.destroy();
                    }
                }, initOption.timeout.offset)
            };
        }
        this.list = [];
    }
    push(value) {
        if (this.notice && !this.notice.show) {
            this.notice.show = true;
        }
        this.list.push(value);
    }
    trigger() {
        this.list.forEach(value => {
            value();
        });
        this.destroy();
    }
    destroy() {
        if (this.notice) {
            clearTimeout(this.notice.timer);
            this.notice = undefined;
        }
        if (this.timeout) {
            clearTimeout(this.timeout.timer);
            this.timeout = undefined;
        }
        this.list = [];
    }
}
export default Wait;
