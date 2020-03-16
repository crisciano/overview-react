// const bg = '/banner-principal.jpg'
// const bg2 = '/bg-2.jpeg'
// const base = process.env.PUBLIC_URL
// import bg from '../public'

export const styles = {
    h4: {
        fontSize: 15,
        margin: 0,
    },
    header: {
        // padding: '80px 0',
        // background: `url(${base}${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        title: {
            fontFamily: "'Dancing Script', cursive",
            color: '#000',
            fontSize: '3em',
            textShadow: '3px 3px #9e9e9e',
        }
    },
    container: {
        display: 'flex', 
        flexWrap: 'wrap',
        width: '90%',
        margin: '0 auto'
    },
    sabores:{
        box:{
            width: 'calc(50% - 30px)',
            padding: '0 15px'
        }
    },
    menu: {
        ul: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        li: {
            listStyle: 'none'
        }
    }
}