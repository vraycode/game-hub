import useGeneres from "../hooks/useGeneres";

const GenereList = () => {
  const { genres } = useGeneres();

  return (
    // @ts-ignore
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
