import Title from "../../../common/Title";
import Head from "./Head";
import Rows from "./Rows";

const PaymentHistory = () => {
    return (
        <>
            <Title title="Payment History" />
            <div className="flex flex-col items-start justify-start w-full">
                <Head />
                <Rows />
            </div>
        </>
    );
};

export default PaymentHistory;
