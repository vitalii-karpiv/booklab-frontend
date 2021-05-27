import Navbar from '../navbar/Navbar';

export default function AuthLayout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto">{children}</div>
    </>
  );
}
