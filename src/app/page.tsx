import { redirect } from "next/navigation";

const Home = () => {
  return redirect("about");
};

export default Home;
