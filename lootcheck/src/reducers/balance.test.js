import balanceReducer from './balance';
import balanceReducer2 from './balance';

import * as contants from '../actions/constants';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;
        it('sets a balance', () => {
            expect(balanceReducer(undefined, { type: contants.SET_BALANCE, balance }))
            .toEqual(balance);
        });

        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    describe('depositReducer', () => {
        it('it deposits into balance', () => {
            const deposit = 10;
            const initialState = 5;
            expect(balanceReducer(initialState, { type: contants.DEPOSIT, deposit }))
            .toEqual(initialState + deposit);
        });
        it('it withdraws from the balance', () => {
            const withdrawal = 10;
            const initialState = 20;
            expect(balanceReducer(initialState, { type: contants.WITHDRAW, withdrawal }))
            .toEqual(initialState - withdrawal);
        });
    });
});