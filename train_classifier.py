import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 1. Load the data
# Note: If this line fails, it means 'data.pickle' does not exist yet.
# Run 'python create_dataset.py' first!
data_dict = pickle.load(open('./data.pickle', 'rb'))

# 2. Convert to numpy arrays
data = np.asarray(data_dict['data'])
labels = np.asarray(data_dict['labels'])

# 3. Split data into training and test sets
x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, shuffle=True, stratify=labels)

# 4. Initialize the model
model = RandomForestClassifier()

# 5. Train the model
print("Training the model...")
model.fit(x_train, y_train)

# 6. Test the model accuracy
y_predict = model.predict(x_test)
score = accuracy_score(y_predict, y_test)

print(f'{score * 100:.2f}% of samples were classified correctly!')

# 7. Save the trained model
f = open('model.p', 'wb')
pickle.dump({'model': model}, f)
f.close()

print("SUCCESS! Model saved as 'model.p'.")