type WelcomeMessageProps = {
    name: string;
    };
const WelcomeMessage = (props:WelcomeMessageProps) => {
    return <div>Welcome to {props.name}</div>;
  };
  
  export default WelcomeMessage;