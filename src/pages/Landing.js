import logo from '../assets/images/main-logo.png';

const Landing = () => {
    return (
        <main>
            <nav>
                <img src={logo} alt='jobify' className='logo' />
            </nav>
            <div className='container page'>
                <h1>job <span>tracking</span> app</h1>
            </div>
        </main>
    )
}

export default Landing