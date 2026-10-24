interface CardHomeProps {
  text: string;
}

function CardHome(props: CardHomeProps) {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export function CardHome() {
  return(
    <div>
      <CardHome>
        
      </CardHome>
    </div>
  );
}

export default CardHome;