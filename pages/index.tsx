import { useState, useEffect } from "react";
import { Button, Htag, P, Rating, Tag } from "../components/";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    console.log("Counter " + counter);
    return function cleanup() {
      console.log("Unmount");
    };
  });

  useEffect(() => {
    console.log("Mounted");
  }, []);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Htag tag="h2">Текст</Htag>
      <Htag tag="h3">Текст</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => {
          setCounter((x) => x + 1);
        }}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="s">Маленький</P>
      <P>Средний</P>
      <P size="l">Большой</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary" href="/">
        Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
export default withLayout(Home);
