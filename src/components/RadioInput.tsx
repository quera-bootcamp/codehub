interface RadioInputTyoes {
    name: string;
    type: string;
    title: string;
}

const RadioInput = ({name, type, title} : RadioInputTyoes) => {
    return (
        <>
            <label className={'flex items-start space-x-2 space-x-reverse pt-2'}>
                <input name={name} type={type} className={'w-4 h-4 border-2 rounded-full'}/>
                <span>{title}</span>
            </label>
        </>
    );
};

export default RadioInput;