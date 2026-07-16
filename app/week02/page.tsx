import Header from "../components/header";
import Footer from "../components/footer";

export default function Mypage() {

    return (
        <>
        <Header />
        <h1>
                    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: `url('/images/minecraft.jpg')` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 p-4 text-white">
                <h1 className="text-5xl font-extrabold mb-4">Xxx Cover</h1>
                <p className="text-lg mb-8">Xxx</p>
                <a href="#" className="bg-indigo-600 px-6 py-3 rounded-lg">Let's Go...</a>
        </div>
        </section>
        </h1>
        <Footer />
        </>
    );
}