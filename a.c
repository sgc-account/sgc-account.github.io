#include <iostream>
#include <string>
#include <regex>
using namespace std;

class Contact {
protected:
    string name;
    string phone;
    string email;
public:
    Contact(const string& n, const string& p, const string& e) : name(n), phone(p), email(e) {}
    virtual ~Contact() {}

    const string& getName() const { return name; }
    const string& getPhone() const { return phone; }
    const string& getEmail() const { return email; }

    void setName(const string& n) { name = n; }
    void setPhone(const string& p) { phone = p; }
    void setEmail(const string& e) { email = e; }

    virtual void display() const = 0;

    bool matches(const string& key) const {
        return name == key || phone == key || email == key;
    }
};

class FamilyContact : public Contact {
public:
    FamilyContact(const string& n, const string& p, const string& e) : Contact(n, p, e) {}
    void display() const override {
        cout << "[Family]   姓名: " << name << "，电话: " << phone << "，Email: " << email << endl;
    }
};

class FriendContact : public Contact {
public:
    FriendContact(const string& n, const string& p, const string& e) : Contact(n, p, e) {}
    void display() const override {
        cout << "[Friend]   姓名: " << name << "，电话: " << phone << "，Email: " << email << endl;
    }
};

class BusinessContact : public Contact {
public:
    BusinessContact(const string& n, const string& p, const string& e) : Contact(n, p, e) {}
    void display() const override {
        cout << "[Business] 姓名: " << name << "，电话: " << phone << "，Email: " << email << endl;
    }
};

class AddressBook {
private:
    Contact* contacts[100];
    int count;

    bool isValidPhone(const string& phone) const {
        static const regex pattern(R"(^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$)");
        return regex_match(phone, pattern);
    }

    bool isValidEmail(const string& email) const {
        static const regex pattern(R"((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))");
        return regex_match(email, pattern);
    }

    void findAllMatches(const string& key, int matches[], int& matchCount) const {
        matchCount = 0;
        for (int i = 0; i < count; ++i) {
            if (contacts[i]->matches(key)) {
                matches[matchCount++] = i;
            }
        }
    }

public:
    AddressBook() : count(0) {}
    ~AddressBook() {
        for (int i = 0; i < count; ++i) {
            delete contacts[i];
        }
    }

    void addContact() {
        string type, name, phone, email;
        if (count >= 100) {
            cout << "电话簿已满，无法添加更多联系人。\n";
            return;
        }

        do {
            cout << "请输入类型（1.家庭  2.朋友  3.商务）：";
            getline(cin, type);
            if (type.size() != 1 || type[0] < '1' || type[0] > '3') {
                cout << "类型输入错误，请输入正确的类型！\n";
            }
        } while (type.size() != 1 || type[0] < '1' || type[0] > '3');

        do{
            cout << "请输入姓名：";
            getline(cin, name);
            if (name.empty()){
                cout << "姓名不能为空！\n";
            }
        } while(name.empty());

        do {
            cout << "请输入电话：";
            getline(cin, phone);
            if (!isValidPhone(phone)) {
                cout << "电话号码格式错误，请输入正确的中国大陆手机号码！\n";
            }
        } while (!isValidPhone(phone));

        do {
            cout << "请输入Email（可选）：";
            getline(cin, email);
            if (!email.empty() && !isValidEmail(email)) {
                cout << "Email格式错误，请输入正确的Email格式！\n";
            }
        } while (!email.empty() && !isValidEmail(email));

        Contact* p = nullptr;
        switch (type[0]) {
            case '1': p = new FamilyContact(name, phone, email);   break;
            case '2': p = new FriendContact(name, phone, email);   break;
            case '3': p = new BusinessContact(name, phone, email); break;
        }
        contacts[count++] = p;
        cout << "添加成功！\n";
    }

    void deleteContact() {
        string key;
        cout << "请输入要删除的姓名、电话或Email：";
        getline(cin, key);

        int matches[100];
        int matchCount = 0;
        findAllMatches(key, matches, matchCount);

        if (matchCount == 0) {
            cout << "未找到联系人，删除失败。\n";
            return;
        }

        cout << "找到 " << matchCount << " 个匹配的联系人:\n";
        for (int i = 0; i < matchCount; ++i) {
            cout << i + 1 << ": ";
            contacts[matches[i]]->display();
        }

        if (matchCount == 1) {
            int n = matches[0];
            delete contacts[n];
            contacts[n] = contacts[count - 1];
            --count;
            cout << "删除成功！\n";
        }
        else {
            string choice;
            while (true) {
                cout << "请选择要删除的联系人编号（1-" << matchCount << "），或输入0取消：";
                getline(cin, choice);

                if (!choice.empty() && choice[0] >= '0' && choice[0] <= '9') {
                    if (choice == "0") {
                        cout << "删除操作已取消。\n";
                        return;
                    }
                    else if (stoi(choice) >= 1 && stoi(choice) <= matchCount) {
                        int n = matches[stoi(choice) - 1];
                        delete contacts[n];
                        contacts[n] = contacts[--count];
                        cout << "删除成功！\n";
                        return;
                    }
                    else {
                        cout << "输入错误，请输入1到" << matchCount << "之间的数字，或0取消。\n";
                    }
                }
                else {
                    cout << "输入错误，请输入1到" << matchCount << "之间的数字，或0取消。\n";
                }
            }
        }
    }

    void modifyContact() {
        string key, name, phone, email;
        cout << "请输入要修改的联系人姓名、电话或Email：";
        getline(cin, key);

        int matches[100];
        int matchCount = 0;
        findAllMatches(key, matches, matchCount);

        if (matchCount == 0) {
            cout << "未找到联系人，修改失败。\n";
            return;
        }

        cout << "找到 " << matchCount << " 个匹配的联系人:\n";
        for (int i = 0; i < matchCount; ++i) {
            cout << i + 1 << ": ";
            contacts[matches[i]]->display();
        }

        int n = -1;
        if (matchCount == 1) {
            n = matches[0];
        }
        else {
            string choice;
            while (true) {
                cout << "请选择要修改的联系人编号（1-" << matchCount << "），或输入0取消：";
                getline(cin, choice);

                if (!choice.empty() && choice[0] >= '0' && choice[0] <= '9') {
                    if (choice == "0") {
                        cout << "修改操作已取消。\n";
                        return;
                    }
                    else if (stoi(choice) >= 1 && stoi(choice) <= matchCount) {
                        n = matches[stoi(choice) - 1];
                        break;
                    }
                    else {
                        cout << "输入错误，请输入1到" << matchCount << "之间的数字，或0取消。\n";
                    }
                }
                else {
                    cout << "输入错误，请输入1到" << matchCount << "之间的数字，或0取消。\n";
                }
            }
        }

        do{
            cout << "请输入新的姓名：";
            getline(cin, name);
            if (name.empty()){
                cout << "姓名不能为空！\n";
            }
        } while(name.empty());

        do {
            cout << "请输入新的电话：";
            getline(cin, phone);
            if (!isValidPhone(phone)) {
                cout << "电话号码格式错误，请输入正确的中国大陆手机号码！\n";
            }
        } while (!isValidPhone(phone));

        do {
            cout << "请输入新的Email（可选）：";
            getline(cin, email);
            if (!email.empty() && !isValidEmail(email)) {
                cout << "Email格式错误，请输入正确的Email格式！\n";
            }
        } while (!email.empty() && !isValidEmail(email));

        contacts[n]->setName(name);
        contacts[n]->setPhone(phone);
        contacts[n]->setEmail(email);
        cout << "修改成功！\n";
    }

    void searchContact() const {
        string key;
        cout << "请输入要查询的姓名、电话或Email：";
        getline(cin, key);

        int matches[100];
        int matchCount = 0;
        findAllMatches(key, matches, matchCount);

        if (matchCount == 0) {
            cout << "未找到联系人。\n";
            return;
        }

        cout << "找到 " << matchCount << " 个匹配的联系人:\n";
        for (int i = 0; i < matchCount; ++i) {
            contacts[matches[i]]->display();
        }
    }

    void displayAll() const {
        if (count == 0) {
            cout << "电话簿为空。\n";
            return;
        }
        cout << "——当前所有联系人——\n";
        for (int i = 0; i < count; ++i) {
            contacts[i]->display();
        }
    }
};

int main() {
    AddressBook book;
    while (true) {
        cout << "\n=== 电话号码管理系统 ===\n"
             << "1. 添加联系人\n"
             << "2. 删除联系人\n"
             << "3. 修改联系人\n"
             << "4. 查询联系人\n"
             << "5. 显示所有联系人\n"
             << "0. 退出\n"
             << "请选择：";
        string input;
        int n;
        getline(cin, input);
        if (input.size() != 1 || input[0] < '0' || input[0] > '5') {
            cout << "无效输入，请重试。\n";
            continue;
        }
        switch (input[0]) {
            case '1': book.addContact();      break;
            case '2': book.deleteContact();   break;
            case '3': book.modifyContact();   break;
            case '4': book.searchContact();   break;
            case '5': book.displayAll();      break;
            case '0': cout << "再见！\n";     return 0;
        }
    }
    return 0;
}
