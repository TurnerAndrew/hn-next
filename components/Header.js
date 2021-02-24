import Link from 'next/link'

const Header = () => {
    return (
        <nav>
            <span>
                <Link href='/'>
                    <a>Hacker News</a>
                </Link> | &nbsp;
                <Link href='/newstories'>
                    <a>new</a>
                </Link> | &nbsp;
                <Link href='/aast'>
                    <a>past</a>
                </Link> | &nbsp;
                <Link href='/comments'>
                    <a>comments</a>
                </Link> | &nbsp;
                <Link href='/ask'>
                    <a>ask</a>
                </Link> | &nbsp;
                <Link href='/show'>
                    <a>show</a>
                </Link> | &nbsp;
                <Link href='/jobs'>
                    <a>jobs</a>
                </Link>
            </span>
        </nav>
        
    )
}

export default Header
