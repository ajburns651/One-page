import { Wrapper, Container, Heading, Link } from "./Links.style.js";

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Heading color="blue">~/School</Heading>
                <Link href="https://classroom.google.com/u/1/h">classroom</Link>
                <Link href="https://parent.sduhsd.net/ParentPortal/LoginParent.aspx">aeries</Link>
                <Link href="https://calendar.google.com">calendar</Link>
                <Link href="https://gmail.com">gmail</Link>
                <Link href="https://drive.google.com/drive/my-drive">drive</Link>
            </Container>

            <Container>
                <Heading color="purple">~/dev</Heading>
                <Link href="https://github.com/ajburns651">github</Link>
                <Link href="https://gitlab.com/ajburns651/dotfiles">gitlab</Link>
                <Link href="https://ajburns651.github.io/School-Notes/public/index.html">notes</Link>
                <Link href="https://wiki.archlinux.org/">archwiki</Link>
                <Link href="https://www.reddit.com/r/unixporn/">unix</Link>
            </Container>

            <Container>
                <Heading color="green">~/fun</Heading>
                <Link href="https://www.youtube.com">youtube</Link>
                <Link href="https://www.netflix.com/">netflix</Link>
                <Link href="https://discord.com/channels/@me">discord</Link>
                <Link href="https://www.reddit.com/">reddit</Link>
                <Link href="https://monkeytype.com/">monkeytype</Link>
            </Container>
        </Wrapper>
    );
};

export default Links;
