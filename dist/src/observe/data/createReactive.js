import defineReactive from '../../reactive/defineReactive';
import observe from '../observe';
import Dep from './Dep';
/**
 * 创建响应式
 * @param {object} data 响应式的对象
 * @param {string} prop 对应的属性
 * @returns {boolean}
 */
function createReactive(data, prop) {
    const dep = new Dep();
    let childOb = observe(data[prop]);
    return defineReactive(data, prop, {
        get: function () {
            if (Dep.target) {
                dep.depend();
                if (childOb) {
                    childOb.dep.depend();
                }
            }
        },
        set: function (val) {
            childOb = observe(val);
            dep.notify();
        }
    });
}
export default createReactive;
