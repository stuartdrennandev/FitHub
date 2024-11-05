import { DatePicker, Form, Input } from "antd";

const ActivityAdder: React.FC = () => {
    return (
        <div>
            <div>Add an activity</div>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Acivity name">
                    <Input />
                </Form.Item>
                <Form.Item label="Date">
                    <DatePicker />
                </Form.Item>
            </Form>
        </div>
    )
}

export default ActivityAdder;