import {makeStyles} from '@material-ui/styles';

const centeredStyleObject = {
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default makeStyles ({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObject
    },
    cardContainer: {
        flexDirection: 'column',
        ...centeredStyleObject,
        width: 500,
        height: 200,
        padding:'2rem'
    },
    title:{
        fontSize: '4rem'
    },
    titleContainer:{
        ...centeredStyleObject
    },
    TextFieldSearch: {
        width: '90%'
    },
    serchButton: {
        marginLeft: '.5rem'
    },
    buttonContainer: {
        marginTop: '.5rem'
    },
    movieIcon: {
        fontSize: '4rem'
    }
});