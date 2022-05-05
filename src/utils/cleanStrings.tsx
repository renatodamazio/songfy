const cleanStrings = (text:string) => { return text.replace(/ {1}/gi, "")};

export default cleanStrings;