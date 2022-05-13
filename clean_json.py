import json

#source_file = '/home/Weav/Standard_recipe/Ner/recipes-std/NLP/ner_schema_updated.json'
target_file = '/home/Weav/Standard_recipe/Ner/recipes-std/NLP/ner_schema_git_clean.json'

with open(source_file) as f:
    raw = json.load(f)
with open(source_file) as f:
    raw = json.load(f)

df remove_paranthesis(dictr):

    for k,v in dictr.items():
        
        # if {} is a value of dict key, continue
        if bool(v) == False:
         continue
        
        # If value is a list check for {} in the list
        elif isinstance(v,list,test):  
            dictr[k]=list(filter(None,v))
            for ele in v:
                if isinstance(ele,dict, test2):
                remove_paranthesis(ele)

        elif isinstance(v, dict) and bool(v)===True:
        remove_paranthesis(v)
        
        else:
        continue

    return dictr


clean_data = remove_paranthesis(raw)

with open(target_file, "w") as f:
    json.dump(clean_data, f, indent=4)
    
    
def remove_empty_elements(d):
    
    def empty(x):
        return x is None or x == {} or x == []

    if not isinstance(d, (dict, list)):
        return d
    elif isinstance(d, list):
        return [v for v in (remove_empty_elements(v) for v in d) if not empty(v)]
    else:
        return {k: v for k, v in ((k, remove_empty_elements(v)) for k, v in d.items()) if not empty(v)}
    return d

cd = remove_empty_elements(raw)
