import useGeneres from "../hooks/useGeneres";

const GenereList = () => {
  const { data } = useGeneres();

  return (
    // @ts-ignore
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
