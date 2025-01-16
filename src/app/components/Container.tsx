// mark as a client component
'use client';

interface ContainerProps {
    // ReactNode represents an array of React elements
    children: React.ReactNode;
}

// React.FC (Functional Component is another way of saying Javascript Functions)
// const *functionName* = (parameters) => {*function logic*};
// note the last px_4 defaults to extra small. 
// mx is margin

// Default container
const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <div className="
        max-w-[2520px] 
        mx-auto 
        xl:px-20 
        md:px-10
        sm:px-2
        px_4">
            {children}</div>
    );
}

export default Container;