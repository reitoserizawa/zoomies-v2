const emailValidator = (email: string): string[] => {
    if (email && typeof email === 'string' && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return [];
    }

    return ['Invalid email'];
};

export default emailValidator;
