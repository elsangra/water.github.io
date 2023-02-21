#include <iostream>
#include <cmath>
#include <cstdlib>
using namespace std;

class Money {
public:
    Money();
    Money(double amount);
    Money(int theDollars, int theCents);
    Money(int theDollars);
    double getAmount() const;
    int getDollars() const;
    int getCents() const;
    void input();
    void output();

private:
    int dollars;
    int cents;

    int dollarPart(double amount) const;
    int centsPart(double amount) const;
    int round(double amount) const;
};

Money::Money(double amount) {
    dollars = dollarPart(amount);
    cents = centsPart(amount);
}

Money::Money(int theDollars, int theCents) {
    dollars = theDollars;
    cents = theCents;
}

int Money::dollarPart(double amount) const {
    int allCents = amount * 100;
    return allCents / 100;
}

int Money::centsPart(double amount) const {
    int allCents = amount * 100;
    return allCents % 100;
}

int Money::getDollars() const {
    return dollars;
}

int Money::getCents() const {
    return cents;
}

double Money::getAmount() const {
    return dollars + (cents * 0.01);
}

void Money::input() {
    char dollarSign;
    cout << "Enter dollar sign: ";
    cin >> dollarSign;

    if (dollarSign != '$')
        exit(1);

    double amount;
    cout << "Enter amount: ";
    cin >> amount;

    dollars = dollarPart(amount);
    cents = centsPart(amount);
}

void Money::output() {
    if ((dollars > 0 && cents < 0) || (dollars < 0 && cents > 0)) {
        cout << "-$";
    } else {
        cout << "$";
    }
    cout << abs(dollars) << "." << abs(cents);
}

int main() {
    Money myMoney(25, 50), yourMoney(25, 60);
    myMoney.output();
    return 0;
}
