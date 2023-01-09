import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({  titleTemplate, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Алтан заан | {titleTemplate}
                </title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    description: PropTypes.string,
}

SEO.defaultProps = {
    title: "Flone",
    titleTemplate: "Product Page",
    description: "Product page of flone react minimalist eCommerce template.",
};

export default SEO;