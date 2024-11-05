import { DatePicker, Form, Button, Input } from "antd";
import styles from "./ActivityAdder.module.css";

const ActivityAdder: React.FC = () => {
    return (
        <div>
            <div className={styles.title}>Add an activity</div>
            <Form
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                className={styles.form}
                onFinish={() => {}}
                onFinishFailed={() => {}}
            >
                <Form.Item 
                    name="summary"
                    className={styles.formItem}
                    label="Activity summary"
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="date"
                    className={styles.formItem}
                    label="Date" 
                    rules={[{ required: true, message: "Please add date of activity"}]}
                    required
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    className={styles.submitButton}
                >
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                    >
                        Create activity
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ActivityAdder;