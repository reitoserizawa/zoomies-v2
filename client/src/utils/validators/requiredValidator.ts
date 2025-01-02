const requiredValidator = (val: string): string[] => {
    if (val) return [];

    return ['This field is required'];
};

export default requiredValidator;
