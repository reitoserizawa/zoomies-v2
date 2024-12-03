const requiredValidator = (val: string): string[] => {
    if (!val) {
        return ['This field is required'];
    }

    return [];
};

export default requiredValidator;
