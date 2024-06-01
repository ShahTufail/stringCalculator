def add(numbers)
    return 0 if numbers.empty?

    numbers_array.reduce(0) do |sum, current|
      num = current.to_i
      next sum if num > MAX_SAFE_INTEGER
      sum + num
    end
  end
