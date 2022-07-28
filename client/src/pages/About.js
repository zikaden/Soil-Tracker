import NavbarLetHome from './NavBarLetHome';


function About() {

    return (
        <div>
            <NavbarLetHome />
            <div class="pt-6 px-3 text-center sm:text-left flex flex-col space-y-10 md:flex-row md:space-x-12 md:space-y-0 md:px-9 md:pb-9 text-black ">
                <div>
                    <h1 class="tracking-wide text-xl pb-3 md:text-3xl md:pb-12 md:pt-18">About the Soil Tracker App</h1>
                    <p class="md:text-xl">This is a beta version. In this final state, this app aims to help researchers and field analysist to record soil profiles.</p>
                </div>
                <div>
                    <h1 class="tracking-wide text-xl pb-3 md:text-3xl md:pb-12 md:pt-18">Contact:</h1>
                    <p class="md:text-xl">bingthemachine@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default About;