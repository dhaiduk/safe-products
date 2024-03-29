import React from 'react';
import PropTypes from 'prop-types';

import ProductInfo from './ProductInfoPage/ProductInfo';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import '../../css/Product.css';

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = value => {
        this.setState({ open: false });
    };

    render() {
        const imageUrl = 'https://' + this.props.itemInfo.image;
        return (
            <Card elevation={0} className='card-hover'>
                <CardMedia
                    onClick={this.handleClickOpen}
                    component='img'
                    className="product"
                    alt='Product Image'
                    image={imageUrl}
                    title={this.props.itemInfo.name}
                />
                <CardContent>
                    <Typography variant="subheading" gutterBottom>
                        {this.props.itemInfo.brand}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        {this.props.itemInfo.name}
                    </Typography>
                    {
                        this.props.itemInfo.ingredients[0] === 'None' ?
                            <Avatar style={{
                                position: 'absolute',
                                right: '10px',
                                top: '10px',
                                margin: 10,
                                backgroundColor: 'yellow',
                                width: 30,
                                height: 30
                            }}>?</Avatar> :
                            !this.props.itemInfo.is_safe &&
                            <Avatar style={{
                                position: 'absolute',
                                right: '10px',
                                top: '10px',
                                margin: 10,
                                backgroundColor: '#ff0000',
                                width: 30,
                                height: 30
                            }}>!</Avatar>
                    }
                    <ProductInfo open={this.state.open} onClose={this.handleClose} item={this.props.itemInfo} />
                </CardContent>
            </Card>
        );
    }
}


Product.propTypes = {
    itemInfo: PropTypes.object.isRequired
};

export default Product