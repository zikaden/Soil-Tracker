import NavbarLogo from '../assets/nav_logo.png'


function NavbarHome() {
    return (
        <div>
            <nav class="bg-teal-700 shadow-lg">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex-direction: row">
                        <div class="flex space-x-7">
                            <div class="flex items-center py-4 px-2">
                                <img src={NavbarLogo} alt="Logo" class="h-8 w-8 mr-2" />
                                <span class="text-sm md:text-base text-white"
                                >Soil Tracker</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarHome;