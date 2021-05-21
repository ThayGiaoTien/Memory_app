import {Pagination, PaginationItem } from '@material-ui/lab';
import React , {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getPosts} from '../actions/posts';
import useStyles from './styles.js';

const Paginate=({page})=>{
    const classes= useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(page) {dispatch(getPosts(page))}

    }, [dispatch, page]);

    const {numberOfPages}= useSelector((state)=>state.posts); //posts= action.payload. posts include posts, numberOfPages, currentPage

    return (
        <Pagination
            classes= {{ul: classes.ul}}
            count= {numberOfPages}
            page={Number(page)||1}
            variant='outlined'
            color='primary'
            renderItem={(item)=>(
                <PaginationItem 
                    {...item}
                    component={Link}
                    to= {`posts?page=${item.page}`}
                />
            )}
        />

    );
};

export default Paginate;