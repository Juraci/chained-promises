const calculate = (value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 0);
    });
};

export default calculate;
