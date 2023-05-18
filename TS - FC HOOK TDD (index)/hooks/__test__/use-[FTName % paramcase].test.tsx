import { renderHook } from '@testing-library/react';

import { use<FTName % pascalcase> } from '../use-<FTName % paramcase>'

describe('/PATH/hooks/use<FTName % pascalcase>', () => {
    test('Название', () => {
        const callback = jest.fn();
        const { result } = renderHook(() => use<FTName % pascalcase>(callback));
        
        expect(callback).toHaveBeenCalledTimes(1);
    });

});
